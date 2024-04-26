<?php

namespace App\Jobs;

use App\Mail\UserAddedToSystem;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NewUserEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $data;
    public $token;


    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $data , string $token)
    {
        $this->data = $data;
        $this->token = $token;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->data['email'])
            ->send(
                new UserAddedToSystem($this->data , $this->token)
            );
    }
}
