# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## The plan
Heres the plan
Backend (Server) ---> WEB ---> Factory receive in DTO form ---> Convert DTO to object ---> Process teh object ---> show the result

for video 
backend (Server) ---> web ---> little to no factory receive + process ---> video.js ---> result

suggestion : 
    Remote control the video from another web browser (will need some kind of authentication  and authorization (like a uuid that will expire in 3 day or something like that mayby let the user choose how low he wants ? or the uuid can be for short term (under 1 days (24 hours) ) and a user connect for longer (and mayby mayby add a let that user do thing to my stuff.))) ===> WEBHOOKS that will do .stop .play .forward to taht time ......

    Personalization : i can choose that or that as background color scheme etc ...

    Main Function : View : Video (movie) and upload movie 
                view (gallery) image, video ,etc ...
                upload inside gallery
                Music player ? with playlist ?
                'Video/Music Background' with auto replay ?
                'Home' assistant (a welcome page thingy ?)
                


