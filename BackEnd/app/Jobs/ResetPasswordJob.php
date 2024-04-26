<?php

namespace App\Jobs;

use App\Mail\ResetPassword;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class ResetPasswordJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $email;

    public $token;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $email, string $token)
    {
        $this->email = $email;
        $this->token = $token;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->email)
            ->send(
                new ResetPassword($this->email , $this->token)
            );
    }
}
