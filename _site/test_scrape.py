#!/usr/bin/env python
from bs4 import BeautifulSoup as bs
import requests

def request_url(url):
    # open with GET method
    resp=requests.get(url)

    # http_respone 200 means OK status
    if resp.status_code==200:
        print("Successfully opened the web page")
        return resp
    print("Failed to open the web page")
    return None

def get_content(page):
    # the target we want to open
    print(f'getting content for{page}')
    url=page['href']

    # open with GET method
    resp=request_url(url)

    # we need a parser,Python built-in HTML parser is enough .
    soup=bs(resp.text,'html.parser')

    # l is the list which contains all the text i.e news
    l=soup.find("div",{"id":"content", "role":"main"})

    # Concatinate everything inside the main content div
    content = ''
    for item in l.children:
        content += str(item)
    return content

def get_real_url(page):
    return page['href']

def get_page_name(page):
    # Returns False for external links, False otherwise
    print(f'getting page name for {page}')
    url = page['href']

    # If navbar contains external link, just keep the link
    if 'narva-schach' not in url:
        print('failed due to url not containing narva')
        return url, False
    if url == 'https://www.narva-schach.de/wordpress/':
        url = 'https://www.narva-schach.de/wordpress/wilkommen/'
    return url.split('/')[-2], True

def get_url(page):
    file_name, internal = get_page_name(page)
    if internal:
        return file_name+'.md'
    return file_name

def get_title(page):
    return page.contents[0]

def create_md(page, subpages, parent):
    print(f'creating md for {page}')

    # Ignore this page, is the same as Termin
    if get_title(page) == 'Terminplan':
        return

    url = get_url(page)
    # if external link, don't create a page
    if '.md' not in url: 
        print(f'fail due to md not in url {url}')
        return 

    with open(url, 'w') as f:
        text =  (
            f"---\n"
            f"title: {get_title(page)} \n"
            f"layout: default\n"
            f"navs:\n"
            )
        f.write(text)
        for subpage in subpages:
            print(f"  {get_title(subpage)}: {get_page_name(subpage)[0]}\n")
            f.write(f"  {get_title(subpage)}: {get_page_name(subpage)[0]}\n")
        # End of front matter
        print(f'parent variable is {parent}')
        if parent:
            f.write(f"navbar: false\n")
            f.write(f"parent_title: {parent}\n")
        f.write(f"---")

        # Insert page contents
        f.write(get_content(page))

# We begin by creating a dictionary of the navigation bar, which we will use
# to create a tree of the entire web-page, and also to create the navigation
# bar itself
main = {}
resp = request_url('https://www.narva-schach.de/wordpress/')

# Feed the HTML to BeautifulSoup
soup = bs(resp.text, features='html5lib')
# Get the main level navigator
main_nav = soup.find(id='menu-schach')
for item in main_nav:
    # Soup magic, finds the top-level navigation bar items
    a = item.find('a')
    if a != -1:
        main[a]=[]

# Find all navigation bar links, including lower lever items
all_nav = main_nav.find_all('a')
current_main = None
for item in all_nav:
    # if the item is a main naviation element
    if item in main:
        current_main = item
    # Add sub-navigation element to its top-level element
    else:
        main[current_main].append(item)

# Generate markdown pages for the top level pages
for page, subpages in main.items():
    print(get_url(page))
    create_md(page, subpages, None)
    for subpage in subpages:
        create_md(subpage, subpages, get_title(page))


