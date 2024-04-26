<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Support\Facades\Crypt;

class UserAddedToSystem extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $encodedId;
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
        $encryptedId = Crypt::encrypt($this->data['id']);
        $this->encodedId = urlencode($encryptedId);
    }

    /**
     * Get the message envelope.
     *
     * @return Envelope
     */
    public function envelope()
    {
        return new Envelope(
            to: $this->data['email'],
            subject: 'User Verification'
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.add-new-user',
            with: [
                'data' => $this->data,
                'action_link' => 'http://localhost:3000/verifying?token=' . $this->token
                ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

}
