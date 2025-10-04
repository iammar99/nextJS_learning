# My First Next.js APP


This is my first **Next.js** App . I'm Learning Next.js From Youtube Channel [Codevolution](https://www.youtube.com/@Codevolution) . Here is the Link to the [PLaylist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) . It contain 72 Lectures from beggining of **NEXT.js** 


## Table Of Content

- [My First Next.js APP](#my-first-nextjs-app)
  - [Table Of Content](#table-of-content)
  - [Lecture no 1](#lecture-no-1)
  - [Lecture no 2](#lecture-no-2)
  - [Lecture no 3](#lecture-no-3)
  - [Lecture no 4](#lecture-no-4)
  - [Lecture no 5](#lecture-no-5)
  - [Lecture no 6](#lecture-no-6)
  - [Lecture no 7](#lecture-no-7)
  - [Lecture no 8](#lecture-no-8)
  - [Lecture no 9](#lecture-no-9)
  - [Lecture no 10](#lecture-no-10)
  - [Lecture no 11](#lecture-no-11)


## Lecture no 1
 - Introduction To next js 
  
  **"An Important Point"** - All components are server components by default and if you want to make a component client component just use use Client component on top like this ```"use client"``` 

## Lecture no 2
 - How to print Hello World
  
## Lecture no 3
 - Understanding the Folder Structure

## Lecture no 4
 - Some Server Client introduction
  
## Lecture no 5
 - Simple Routing 

 Routing in Next.js is simple . You don't need to set up a proper routing it will indentify automatically by your folder structure 
 **page.tsx** file in app folder will be home page 
 and pages will be displayed by the folder structure e.g. If name of folder is **about** containing **page.tsx** about route will display this


## Lecture no 6 
 - Nested Routing 


 It is Simple as above just create nested folders in parent folder for nesting route
  
## Lecture no 7
 - Dynamic Routing

 It is also not that difficult as what you need to do is just write folder name in square brackets just like I do look in product folder

 We can also get that dynamic route data in props as we get in react

 `Go Look for the code` 
  
## Lecture no 8
 - Nested Dynamic Routing

 It is as same as static nesting routing 

 `Just Go look for code in product folder`
  
## Lecture no 9
 - Catch All Segments
  <br/>
It is similar to dynamic nested routing but it is slightly different in syntax and usage We just need to create a **[...slugs]** and it will avoid you to create multiple nesting
`Look for code in docs folder`

## Lecture no 10
  - Not Found Page
  <br>

We can create custom Not found for the webSite and also create dynamic not Found File for a file
We can also create not found page for the different folder depending on different scenario

Just name your file Not-found and it will work as not found


## Lecture no 11
  - File colocation 
  <br>

It is used to increase readabilty of the project. It is a concept that tells that file will only be accessible in route if exported and named **page**


## Lecture no 12
  - Private Folder 
  <br>

It is used to create private folders means telling NEXT.js that these folders are just for internal purposes don't create route for it . It is done by creating a folder starting from underscore **_[foldername]** but what if you want underscore in you r url then use **%5F** in folder name. But better approach is to create folder outside app folder to avoide it from routing


## Lecture No 13
  - Route Groups
  <br>
It is a concept to manage folder in an organized way. Like keeping all *Authentication* files in **Auth** Folder but It will effect URL If you want to avoid effecting URL. just wrap folder name in **()**  
`Look for code in auth folder`


## Lecture No 14
  - Layouts
  <br>
  It is how page will render on the browser. A layout file will be pre defined by NEXT.js if you delete it, It will be created again
`Look for code in |Layout.tsx| file`
We can edit according to our need


## Lecture No 15
  - Nested Layouts
  <br>
  We can create a layout for specific route. 
`Look for code in |Layout.tsx| file in Auth Folder`


## Lecture No 16
  - Multiple Route Layout
  <br>
  We can create a specific route by creating route groups as we did class 13. 
`Look for code in sub forlders of app Folder`


## Lecture No 17
  - Handling Meta Data
  <br>
  In layout file we can see there is a meta data object which contain title and description we can have different titles for different route same as layout but we can also have dynamic title as of dynamic routes. We can also give a title to specific page 
  `Look in Layout.tsx in frontend and also in login page`


## Lecture No 18
  - Furthur Explaining Meta Data
  <br>
  We can also set meta data in a different way 
  `Look in Layout.tsx in frontend and also in login page`
   - Default:- Default title for the page
   - Template:- Dynamic Route 
   - Absolute:- It will overwrite the default Value


## Lecture No 19
  - Navigation using Link
  <br>
  **Link** is used for navigating from one page to another.
  Another important thing in Link is replace atribute it will replace all navigation history
  `Look in home and page files`


## Lecture No 20
  - Active Link
  <br>
  It is a concept that how to style active links 
  `Look in Auth Folders`


## Lecture No 21
  - Params and Search Params
  <br>
  It is a concept how to destructure URL 
  `Look in Articles Folders`
  **Note**:- search params are not available in layout.tsx
  **Note**:- async/await will not work in client component so you may use **use** from react in this
  `Look for code in [articlesID] file`


## Lecture No 22
  - Navigating programmatically
  <br>
  We can use **useRouter** for navigating programmatically 
  `Look in  products folder`
  There are multiple option 
  we can move 
  1. Forward in navigation
  2. backward in navigation
  3. replace
  We can also use redirect to redirect to another page 
  `Look for code in [productsId] file`


## Lecture No 23
  - Templates
  <br>
  Templates file is same as layout file but difference is that in layout file states are preserved but in templete file page is freshly rendered, effects are runned and states are not preserved
  `Look for file in auth Folder`


## Lecture No 24
  - Loading Files
  <br>
  This files loads when your content is being load automatically.
  `Look for loading file in blog Folder`


## Lecture No 25
  - Error Files
  <br>
  This files loads when any error occurs without disturbing the app.
  This file wraps all files and there nested files you can also create different for different segments
  `Look for loading file in blog Folder`