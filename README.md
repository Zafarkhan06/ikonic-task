# IKONIC test

Feedback system created by Zafar Khan. The front-end is in ReactJs and backend is in Laravel. Below I will be giving the detailed instruction on how to install and setup the project, if you still face any problem you can send me an email and I will hop on a short google meet call to guide.
## Installation

I will be giving the link to the github repository link if you want to simply install from there , the repository is public so you wont face any problem.
just simply copy the below command and paste it in a command prompt.

```bash
git clone https://github.com/Zafarkhan06/ikonic-task.git
```

## Installation Front End

after successfuly clonning the repository go to the folder "ikonic-front" and enter this following command inside the folder.

```
npm install
```
after that kindly create a file by the name of .env and keep at the src folder level and inside the folder paste this line and save it.

```
REACT_APP_URL=http://127.0.0.1:8000
```
after that just simply run the project using this command
```
npm run start
```

## Backend Installation
Go to the backend folder and run this command.
```
composer install
```
Then create a database by the name of ikonic or change it in env according to your taste.
after creating the database simply run this commands.

```
php artisan migrate:fresh --seed

```
to generate the key
```
php artisan key:generate
```
then start the server

```
php artisan serve

```

## Dummy Emails

Email: iambestcandidate@ikonic.com
Password: 123456789

or you can just simply go ahead and create your account and you will be redirected to the screen where you will be able to see entered feedback and if there is no feedback you can create one by just simply clicking on the add feedback button

