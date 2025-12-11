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
  - [Lecture no 12](#lecture-no-12)
  - [Lecture No 13](#lecture-no-13)
  - [Lecture No 14](#lecture-no-14)
  - [Lecture No 15](#lecture-no-15)
  - [Lecture No 16](#lecture-no-16)
  - [Lecture No 17](#lecture-no-17)
  - [Lecture No 18](#lecture-no-18)
  - [Lecture No 19](#lecture-no-19)
  - [Lecture No 20](#lecture-no-20)
  - [Lecture No 21](#lecture-no-21)
  - [Lecture No 22](#lecture-no-22)
  - [Lecture No 23](#lecture-no-23)
  - [Lecture No 24](#lecture-no-24)
  - [Lecture No 25](#lecture-no-25)
  - [Lecture No 26](#lecture-no-26)
  - [Lecture No 27](#lecture-no-27)
  - [Lecture No 28](#lecture-no-28)
  - [Lecture No 29](#lecture-no-29)
  - [Lecture No 30](#lecture-no-30)
  - [Lecture No 31](#lecture-no-31)
  - [Lecture No 32](#lecture-no-32)
  - [Lecture No 33](#lecture-no-33)
  - [Lecture No 34](#lecture-no-34)
  - [Lecture No 35](#lecture-no-35)
  - [Lecture No 36](#lecture-no-36)
  - [Lecture No 37](#lecture-no-37)
  - [Lecture No 38](#lecture-no-38)
  - [Lecture No 39](#lecture-no-39)
  - [Lecture No 40](#lecture-no-40)
  - [Lecture No 41](#lecture-no-41)
  - [Lecture No 42](#lecture-no-42)
  - [Lecture No 43](#lecture-no-43)
  - [Lecture No 44](#lecture-no-44)
  - [Lecture No 45](#lecture-no-45)
  - [Lecture No 46](#lecture-no-46)
  - [Lecture No 47](#lecture-no-47)
  - [Lecture No 48](#lecture-no-48)
  - [Lecture No 49](#lecture-no-49)
  - [Lecture No 50](#lecture-no-50)
  - [Lecture No 51](#lecture-no-51)
    - [RSC and Next.js](#rsc-and-nextjs)
  - [Lecture No 52](#lecture-no-52)
  - [Lecture No 53](#lecture-no-53)
  - [Lecture No 54](#lecture-no-54)
  - [Lecture No 55](#lecture-no-55)
  - [Lecture No 56](#lecture-no-56)
  - [Lecture No 57](#lecture-no-57)
  - [Lecture No 58](#lecture-no-58)
  - [Lecture No 59](#lecture-no-59)
    - [Server Components](#server-components)
    - [Client components](#client-components)
  - [Lecture No 60](#lecture-no-60)
  - [Lecture No 61](#lecture-no-61)
  - [Lecture No 62](#lecture-no-62)
  - [Lecture No 63](#lecture-no-63)
  - [Lecture No 64](#lecture-no-64)
  - [Lecture No 65](#lecture-no-65)
  - [Lecture No 66](#lecture-no-66)
  - [Lecture No 67](#lecture-no-67)
  - [Lecture No 68](#lecture-no-68)
  - [Lecture No 69](#lecture-no-69)
  - [Lecture No 70](#lecture-no-70)
  - [Lecture No 71](#lecture-no-71)
  - [Lecture No 72](#lecture-no-72)
  - [Lecture No 73](#lecture-no-73)
  - [Lecture No 74](#lecture-no-74)
  - [Lecture No 75](#lecture-no-75)
  - [Lecture No 76](#lecture-no-76)
  - [Lecture No 77](#lecture-no-77)
  - [Lecture No 78](#lecture-no-78)
  - [Lecture No 79](#lecture-no-79)
  - [Lecture No 80](#lecture-no-80)
  - [Lecture No 81](#lecture-no-81)
  - [Lecture No 82](#lecture-no-82)
  - [Lecture No 83](#lecture-no-83)
  - [Lecture No 84](#lecture-no-84)
  - [Lecture No 85](#lecture-no-85)


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
  `Look for error file in [productId] Folder`


## Lecture No 26
  - Recovering from error
  <br>
  It is used to recover from error 
  `Look for error file in [productId] Folder`


## Lecture No 27
  - Handling Nested Error
  <br>
  When you put error files in a folder all nested folders are covered
  `Look for error file in products Folder`



## Lecture No 28
  - Handling Layout Error
  <br>
  If a layout and Error file is in same route then if there occur any error in layout error file will not catch it.
  If you want error to catch layout errors then place error in parent



## Lecture No 29
  - Handling Root Error
  <br>
  If an error occurs in root then obviously there is not any error wrapper so error file will not trigger. So overcome this there is file called global error 
  `Look for the code in app folder`

  This will only work in production mode So if you want to check it go for **npm run build** command to start production server and **npm run start** to start localhost



## Lecture No 30
  - Parallel Routes
  <br>
  It is a way to manage multiple section in a page. It can be done by different ways but parallel routes is the best way. In Parallel routes sections can be created by @**section-name**
  It also help in sub navigation
  `Look for the code in dashboard folder inside (dashboard) Folder`



## Lecture No 31
  - Unmatched Routes
  <br>
  We can navigate between sub routes without disturbing the orginal routes. but when we will refresh the page 404 Error will occur so we need a default.tsx file for all of the parallel routes is needed
   
  `Look for the code in dashboard folder inside (dashboard) Folder`



## Lecture No 32
  - Conditional Routes
  <br>
  We can implement routes according to different conditions
  
  `Look for the code in dashboard folder inside (dashboard) Folder`



## Lecture No 33
  - intercepting Routes
  <br>
  We can implement one route inside other routes layout

  `Look for the code in f1 folder inside (fronend) Folder`


## Lecture No 34
  - Parallel intercepting Routes
  <br>
  We can also implement parallel intercepting routes

  `Look for the code in photofeed folder inside (dashboard) Folder and specially it wil only work in production mode`

`I stuck on it for three days after that I overcome it by starting production server but now it is also working on development server and lastly layout file is also important`


## Lecture No 35
  - Routes Handler
  <br>
  Route handlers help organising your API's. The convention is make **route.ts** file in **folder** and function name should be the method e.g. **(GET,POST etc)**
  We can also do nesting

  If there is a 2 files in a folder one with route handler and second one is page.tsx the route file is over written

  `Look for the code in (backend API) folder`


## Lecture No 36
  - GET Routes Handler
  <br>
  Same as above

  `Look for the code in (backend API)/products-b folder`


## Lecture No 37
  - POST Routes Handler
  <br>
  Handling POST request is also same as GET

  `Look for the code in (backend API)/products-b folder`


## Lecture No 38
  - Dynamic Routes Handler
  <br>
  Handling Dynamic routes is as same as dynamic folder routing

  `Look for the code in (backend API)/products-b folder`



## Lecture No 39
  - PATCH Routes Handler
  <br>
   PATCH is used for updating the document 

  `Look for the code in (backend API)/products-b folder`



## Lecture No 40
  - DELETE Routes Handler
  <br>
   DELETE is used for deleting the document 

  `Look for the code in (backend API)/products-b/[id] folder`



## Lecture No 41
  - URL Query Parameters
  <br>
   It is use to get search params from url 

  `Look for the code in (backend API)/products-b folder`



## Lecture No 42
  - Headers in Route Handlers
  <br>
   There are 2 types Headers one to accept data one to send. Recieve headers like authorization and send like content-type

  `Look for the code in (backend API)/products-b folder`



## Lecture No 43
  - Cookies in Route Handlers
  <br>
  We have discussed Cookies in Backend Course. Here we will see how to use Nect.js
  
  `Look for the code in (backend API)/products-b folder`




## Lecture No 44
  - Redirects in Route Handler
  <br>
  Redirect simply means Redirecting Routes to another

  `Look for the code in (backend API)/products-b folder`


## Lecture No 45
  - Caching in Route Handlers
  <br>
  Caching is mostly used to avoid again again request to DB.

  **It runs only in Production Mode**

  `Look for the code in (backend API)/time folder`


## Lecture No 46
  - Middlewares
  <br>
  Middleware is use to manage response and request in your app like authenticating, cookies ets.

  `Look for the code in app/middleware.ts file`


## Lecture No 47
  - Rendering
  <br>
  
  Rendering is the process of transforming the component code you write into user interfaces that users can see and interact with
  In Next.js, the tricky part to building a performant application is figuring out when and where this transformation should happen
  CSR, SSR and RSCs?
  Rendering in React → Rendering in Next.js
  Sometimes it takes a couple of passes for these concepts to really sink in


## Lecture No 48
  - CSR -> Client Side Rendering
  <br>
  
  It is same as REACT.js as it create a single page application.It has some drawbacks as like perfomance, Seo etc  

  


## Lecture No 49
  - SSR -> Server Side Rendering
  <br>
  
  In this complete html page is rendered from server side. It is resolves the problem with the CSR but also come with it's own disadvantages like it must have entire javascript for page before rendreing page and also fecth entire data before rendering so solving this problem we have another rendering type  


  


## Lecture No 50
  - Suspense Server Side Rendering
  <br>
  
  It is used to solve all problems SSR faced using suspense component. It uses Suspense component to solve the problem it renders all component other than the  components that required hydration. It means user can see th other components. 


  But there is still a problem that we can not render that comopnent untill all the hydration of that component is done 


  It is solved by code splitting. In this we tell server that this data is not urgent and this is urgent by using this we can reduce waiting time   





## Lecture No 51  
  - React Server Components
  <br>
  
React Server Components offer a new approach to building React apps by separating components into two: Server Components and Client Components

Server Components run exclusively on the server - they fetch data and prepare content without sending code to the browser

This makes your app faster because users download less code

However, they can't handle any interactions

Client Components, on the other hand, run in the browser and manage all the interactive parts like clicks and typing

They can also get an initial server render for faster page loads


### RSC and Next.js
"Okay Vishwas, this is all great information about React's rendering evolution, but how does this connect to Next.js?"

The App Router in Next.js is built entirely on the RSC architecture
All these benefits we've discussed? They're already built into the latest version of Next.js

Understanding the evolution of React's rendering provides the foundation needed for you to grasp what we're about to explore as we dive deeper into Next.js



This is a theiry lecture Here is the Link of this class :- [Class Link](https://www.youtube.com/watch?v=Nnr6w8vamUo&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=52)




## Lecture No 52  
  -  Server and Client Components
  <br>

  In the RSC architecture and by extension in the Next.js app router, components are server components by default

  To create client components, add the "use client" directive at the top of the file

  Server components are rendered exclusively on the server
  
  Client components are rendered once on the server and then on the client
  


## Lecture No 53  
  -  RSC Rendering Lifecycle
  <br>

  Total Theory go for the Class :- [Class Link](https://www.youtube.com/watch?v=aZAMP-4Szgg&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=53)



## Lecture No 54
  -  Static Rendering
  <br>


  Static rendering is a strategy where the HTML is generated at build time

  Along with the HTML, RSC payloads for components and JavaScript chunks for client-side hydration are created
  
  Direct route visits serve HTML files
  
  Client-side navigation uses RSC payloads and JavaScript chunks without additional server requests
  
  Static rendering is great for performance, especially in blogs, documentation, and marketing pages


  This is also a theory Class :- [Class Link](https://www.youtube.com/watch?v=O6VFEwHujW0&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=54)


  

## Lecture No 55
  -  Dynamic Rendering
  <br>

  Dynamic rendering is a strategy where the HTML is generated at request time
  
  Next.js automatically enables it when it encounters dynamic functions like cookies, headers, connection, draftMode, after or searchParams prop
  
  Dynamic rendering is great for personalized content like social media feeds
  
  You don't have to stress about choosing between static and dynamic rendering
  
  Next.js automatically selects the optimal rendering strategy for each route based on the features and APIs you're using
  
  if you want to force a route to be dynamically rendered, you can use the `export const dynamic = 'force-dynamic" config at the top of your page

  When we render static page which doesn't contain any thing dynamic thing it shows static page but when implements dynamic routes like cookies or API it converts into Dynamic page 


  `Go Look For code in (rendering) folder in production mode`



  

## Lecture No 56
  -  generateStaticParams
  <br>
  It is use to make dynamic page static page

  `Go Look for code in (rendering) folder in production`



## Lecture No 57
  -  dynamicParams
  <br>
  Control what happens when a dynamic segment is visited that was not generated with generateStaticParams()

  **true** - Next.js will statically render pages on demand for any dynamic segments not included in generateStaticParams()

  **false** - Next.js will return a 404 error for any dynamic segments not included in our pre-rendered list


  We can also stop it by using this line at the top

  ```
  export const dynamicParams = false
  ```

  `Go Look for code in (rendering) folder in production`






## Lecture No 58
  -  Streaming
  <br>

  Streaming is a strategy that allows for progressive UI rendering from the server
  
  Work is broken down into smaller chunks and streamed to the client as soon as they're ready
  
  
  This means users can see parts of the page right away, without waiting for everything to load
  It's particularly powerful for improving initial page load times and handling UI elements that depend on slower data fetches, which would normally hold up the entire route
  
  Streaming comes built right into the App Router

  `Go Look for this code in (rendering)>rendering-product>[id] folder`


  

## Lecture No 59
  -  Server and Client Composition Patterns
  <br>


  ### Server Components

   - fetching data
   - accessing backend resources directly
   - keeping sensitive information (like access tokens and API keys) secure on the server
     - handling large dependencies server-side - which means less JavaScript for your users to download

  ### Client components

   - adding interactivity
   - handling event listeners (like onClick(), onChange(), etc.)
   - managing state and lifecycle effects (using hooks like useState(),
   - useReducer(), useEffect())
   - working with browser-specific APIs
   - implementing custom hooks
   - Using React class components



  

## Lecture No 60
  -  Server only Code
  <br>
  It is code that should only stay on server and not on the client side because it can cause security issues so we need some securtiy guard for it 


  Here is the place where **server-only** package come into field. Install this pacage by running this command

  `npm i server-only`

  `Go Look for code in the (Rendering) folder`



## Lecture No 61
  -  Third Party Packages
  <br>
 - Server Components have introduced an exciting new paradigm in React, and the ecosystem is evolving to keep up
 - Third-party packages are starting to add the "use client" directive to components that need client-side features, making it clear where they should run
 - Many npm packages haven't made this transition yet
 - This means while they work fine in Client Components, they might break or fail completely in Server Components
 - We can wrap the third-party components that need client-side features in our own Client Components


`Go Look for code in the (Rendering) folder in client-route and server-route`
 


## Lecture No 62
  -  Context Providers
  <br>
 - Context providers typically live near the root of an application to share global state and logic
 - For example, your application's theme
 - However, React context isn't supported in Server Components
 - If you try to create a context at your application's root, you'll run into an error
 - The solution is to create your context and render its provider inside a dedicated Client Component
 - IT will not work in server component as we did in REACT we wrap our with it
 - But now we will create it sepratly in client component and then will wrap it


`Go Look for code in the (Rendering) folder in client-route and Layout.tsx`




## Lecture No 63
  -  Client-only Code
  <br>
 - Just like how we need to keep certain operations server-side, it's equally crucial to keep some functionality strictly on the client side
 - Client-only code works with browser-specific features - think DOM manipulation, window object interactions, or localStorage operations
 - These features aren't available on the server, so we need to make sure such code runs only on the client side to avoid server-side rendering errors
 - To prevent unintended server side usage of client side code, we can use a package called client-only


`Go Look for code in the (Rendering) folder in client-route and Layout.tsx`


## Lecture No 64
  - Client Component Placement
  <br>

   - Since server components can't handle state and interactivity, we need client components to fill this gap
   - The key recommendation here is to position these client components lower in your component tree

`Go Look for code in (Rendering) > clientCompnentPlacement > client-nav`

**Our target is to minimize browser load by keeping only essential components on client side**




## Lecture No 65
  - Interleaving Server and Client Components
  <br>
  There are 4 Scenarios
  1. Server component inside Server Component ---- ✔
  2. Server component inside Client Component ---- ❌ worked by using props 
  3. Client component inside Client Component ---- ✔
  4. Client component inside Server Component ---- ✔

`Look for code inside (Interleaving) Folder`




## Lecture No 66
  - Data Fetching
  <br>

 - So far, we've been working with hard-coded content in our routes and components
 - In actual enterprise apps, you're usually pulling data from external sources
 - The App Router is built on React Server Components (RSC) architecture which gives us the flexibility to fetch data using either server components or client components

It's usually preferable to use server components for data operations because:
 - You can directly communicate with your databases and file systems on the server side
 - You get better performance since you're closer to your data sources Your client-side bundle stays lean because the heavy lifting happens server-side
 - Your sensitive operations and API keys remain secure on the server




## Lecture No 67
  - Fetching Data in Client Components
  <br>

  
  IT is similar to we did in REACT
  `Look for code in (Data fetching) > user-client`




## Lecture No 68
  - Fetching Data in Server Components
  <br>



  Request memoization contd.
 - This means you can fetch data wherever you need it in your component tree without worrying about duplicate network requests
 - React will only make the actual fetch once and reuse the result for subsequent calls during the same render pass
 - It's a React feature and thereby included in Next.js
 - Lets you write data-fetching code exactly where you need it rather than having to centralize fetches and pass data down through props
  
  `Look for code in (Data fetching) > users-server`




## Lecture No 69
  -  Loading and Error States
  <br>


 - While client components require you to manage these states with separate variables and conditional rendering, server components make this process much cleaner
 - To implement a loading state, all we need to do is define and export a React component in loading.tsx
For handling errors, define and export a React component in error.tsx
  
  `Look for code in (Data fetching) > users-server`




## Lecture No 70
  -  Sequential Data Fetching
  <br>


  When fetching data inside components, you need to be aware of two data fetching patterns:
  1. Sequential
  2. Parallel
  Sequential: requests in a component tree are dependent on each other. This can lead to longer loading times.
  
  `Look for code in (Data fetching) > posts-sequntially`




## Lecture No 71
  -  Parallel Data Fetching
  <br

  **Parallel**: requests in a route are eagerly initiated and will load data at the same time. This reduces the total time it takes to load data.
  
  `Look for code in (Data fetching) > user-parallel`

------------------------------------------------------------------


`**From Here I used Part 2**`


------------------------------------------------------------------

## Lecture No 72
  -  Fetching from a database
  <br


  We've looked at how to fetch data from API endpoints using the Fetch API Let's dive into fetching data from a database in Server Components
  What we're about to cover is super important - it's the foundation for data mutations and server actions coming up next
  Two key reasons why fetching data directly from a database is powerful
  1. server components have direct access to server-side resources, which makes database interactions seamless
  2. since everything happens on the server, we don't need API routes or worry about exposing sensitive information to the client

  We're going to be working with two super helpful tools - SQLite and Prisma 
   - **SQLite**
    A simple, file-based database to store information in your project
  It doesn't require a server or a complex setup and it's perfect for learning and prototyping
   - **Prisma**
  A tool that makes it really easy to talk to your database
  It's like a translator that helps your code communicate with SQLite

  use this command for installing prisma
  ```
  npm install prisma -D
  ```

  use this command for intializing prisma
  ```
  npx prisma init --datasource-provider sqlite
  ```

  use this command for running migration
  ```
  npx prisma migrate dev --name init
  ```

  **I  used  MongoDB**
  
  `Look for code in product-db`





  


## Lecture No 73
  -  Data Mutation
  <br

  **CRUD**
  - Create
  - Read
  - Update
  - Delete
  

  `Look for code in product-db + product-form`

  


## Lecture No 74
  -  Server Actions
  <br>

**Server Actions benefits**
  - **Simplified code:** they dramatically simplify your code as there is no need for separate API routes or client-side state management for form data.
  - **Improved security:** they boost security by keeping sensitive operations
server-side, away from potential threats.
  - **Better performance:** they improve performance because there's less JavaScript running on the client, leading to faster load times and better core web vitals.
  - **Progressive enhancement:** forms keep working even if JavaScript is turned off in the browser - making your apps more accessible and resilient

  `Look for code in  product-form-server`


  

## Lecture No 75
  -  Pending State with useFormStatus
  <br>
  - useFormStatus is a React hook that gives us status information about the last form submission


  **const status = useFormStatus()**
  - pending: a boolean that indicates if the parent <form> is currently submitting data: an object containing the form's submission data
  - method: a string (either 'get' or 'post') showing the HTTP method being used 
  - action: a reference to the function that was passed to the parent <form>'s
  action prop


We'll use "pending" to disable our submit button while the form is being processed


   
## Lecture No 76
  -  Form Validation with useActionState
  <br>
- useActionState is a React hook that allows us to update state based on the result of a form action
- It is particularly helpful for handling form validation and error messages

**In this CLass we used this hook but not completly**


   
## Lecture No 77
  -  Separating Server Actions
  <br>

  `Look for code in action Folder and product-form-server Folder`


**In this CLass we completed our previous task in a seprate file**


   
## Lecture No 78
  -  useFormStatus vs useActionState
  <br>

-  can help us determine if a form is being submitted and let us disable the submit button - but there's an interesting difference between them
- The pending state from useFormStatus is specifically for form submissions isPending from useActionState can be used with any Action, not just form submissions
- Go with pending from useForm Status when you're building reusable components that are meant to live inside forms. - For example, submit buttons or loading spinners that you'll want to use across different forms in your application.
- Choose isPending from useActionState when you need to keep track of server actions that aren't necessarily related to form submissions. It gives you that extra flexibility.


   
## Lecture No 79
  - Update Server Action
  <br>

  I have not used this method so watch this video

  but I'll do in future

  **Link to this video:-** [Video Link](https://www.youtube.com/watch?v=SbaKEqCRcDE)


   
## Lecture No 80
  - Delete Server Action
  <br>

  I have not used this method so watch this video

  but I'll do in future

  **Link to this video:-** [Video Link](https://www.youtube.com/watch?v=oi71gLPFQtk)

   

   
## Lecture No 81
  - useOptimistic Hook
  <br>

  - useOptimistic is a React Hook that provides a way to optimistically update the UI while an asynchronous action is underway
  - This technique helps make our apps feel more responsive, especially when working with forms
  - Instead of making users wait for server responses, we can show them the expected result right away.


`Look for code in delete button`
   

   
## Lecture No 82
  -  Form Component
  <br>

  1. when the Form component becomes visible, it prefetches the loading UI associated with "/products-db" route
  2. when a user submits the search, it instantly navigates to the products page client-side and the form data gets turned into URL params
  3. it'll show the loading state while the search results are being fetched 4. once the data is ready, the results are displayed in the UI


   

   
## Lecture No 83
  -  Authentication
  <br>

  Most apps revolve around users
- When building for users, we need to consider three fundamental concepts:
- Identity - verifying who someone is through authentication
- Sessions - keep track of a user's logged-in state across requests
- Access - controls what they can do
In developer terms, we call these authentication, session management, and authorization


With React single-page apps, you're only dealing with client-side code

With Next.js, you've got to protect your app from three different angles: client-side, server-side, and API routes


**Authentication**

1. Let users sign up
2. Give them a way to sign in
3. Enable them to manage their account (password changes, email updates, etc.)
4. Show or hide UI elements based on whether they're logged in
5. Protect certain routes depending on authentication status
6. Access session and user data when needed
7. Set up role-based access control (admin, editor, viewer, and so on)
8. Provide a way to sign out

   

   
## Lecture No 84
  -  Clerk Setup
  <br>

  Just basic setup 
  1. Register or sign-in 
  2. create application
  3. follow the givven steps
   

   
## Lecture No 85
  -  Sign in and Sign out
  <br>
  
  Just Use Clerk given Sign in and Sign Out button
