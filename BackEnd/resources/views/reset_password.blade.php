<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ever well</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <style>
        .mainDiv {
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
            background-color: #f9f9f9;
            font-family: 'Open Sans', sans-serif;
        }
        .cardStyle {
            width: 500px;
            border-color: white;
            background: #fff;
            padding: 36px 0;
            border-radius: 4px;
            margin: 30px 0;
            box-shadow: 0px 0 2px 0 rgba(0,0,0,0.25);
        }
        #signupLogo {
            max-height: 100px;
            margin: auto;
            display: flex;
            flex-direction: column;
        }
        .formTitle{
            font-weight: 600;
            margin-top: 20px;
            color: #2F2D3B;
            text-align: center;
        }
        .inputLabel {
            font-size: 12px;
            color: #555;
            margin-bottom: 6px;
            margin-top: 24px;
        }
        .inputDiv {
            width: 70%;
            display: flex;
            flex-direction: column;
            margin: auto;
        }
        input {
            height: 40px;
            font-size: 16px;
            border-radius: 4px;
            border: none;
            border: solid 1px #ccc;
            padding: 0 11px;
        }
        input:disabled {
            cursor: not-allowed;
            border: solid 1px #eee;
        }
        .buttonWrapper {
            margin-top: 40px;
        }
        .submitButton {
            width: 70%;
            height: 40px;
            margin: auto;
            display: block;
            color: #fff;
            background-color: #065492;
            border-color: #065492;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.035);
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
        }
        .submitButton:disabled,
        button[disabled] {
            border: 1px solid #cccccc;
            background-color: #cccccc;
            color: #666666;
        }

        #loader {
            position: absolute;
            z-index: 1;
            margin: -2px 0 0 10px;
            border: 4px solid #f3f3f3;
            border-radius: 50%;
            border-top: 4px solid #666666;
            width: 14px;
            height: 14px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

    </style>
</head>
<body class="antialiased">
<div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <form method="POST" action="{{ route('password.update') }}">
                                @csrf
                                <div class="mainDiv">
                                    <div class="cardStyle">
                                        <form action="" method="post" name="signupForm" id="signupForm">
                                            <img src="" id="signupLogo"/>
                                            <h2 class="formTitle">
                                                Login to your account
                                            </h2>

                                            @error('passwordChanged')
                                            <span class="invalid-feedback" role="alert">
                                                        <p style="color: green; text-align: center; margin-top: 10px">{{ $message }}</p>
                                                    </span>
                                            @enderror

                                            @error('fail')
                                            <span class="invalid-feedback" role="alert">
                                                        <p style="color: red; text-align: center; margin-top: 10px">{{ $message }}</p>
                                                    </span>
                                            @enderror
                                            <input type="hidden" name="token" value="{{ $token }}">

                                            <div class="inputDiv">
                                                <label class="inputLabel" for="password">Email</label>
                                                <input
                                                    type="text" id="email" name="email"
                                                    required
                                                    value="{{ $email ?? old('email') }}"
                                                >
                                            </div>
                                            <div class="inputDiv">
                                                <label class="inputLabel" for="password">New Password</label>
                                                <input type="password" id="password" name="password" required>
                                            </div>
                                            <div class="inputDiv">
                                                <label class="inputLabel" for="confirmPassword">Confirm Password</label>
                                                <input type="password" id="confirmPassword" name="password_confirmation">

                                                @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <p style="color: red; margin-top: 10px">{{ $message }}</p>
                                                    </span>
                                                @enderror
                                            </div>
                                            <div class="buttonWrapper">
                                                <button type="submit" id="submitButton" class="submitButton pure-button pure-button-primary">
                                                    <span>Reset Password</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</body>
</html>
