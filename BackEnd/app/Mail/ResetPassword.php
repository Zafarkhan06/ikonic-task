<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPassword extends Mailable
{
    use SerializesModels;

    public $email;

    public $token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $email, string $token)
    {
        $this->email = $email;
        $this->token = $token;
    }
    /**
     * Get the message envelope.
     *
     * @return Envelope
     */
    public function envelope()
    {
        return new Envelope(
            to: $this->email,
            subject: 'Reset Password'
        );
    }
    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.reset_password',
            with: [
                'email' => $this->email,
                'action_link' => 'http://localhost:3000/password-reset?token=' . $this->token . '&email=' . $this->email]
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
