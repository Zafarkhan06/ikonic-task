@php
    switch ($image) {
        case('locked'):
            $svg = asset('images/email/icons/email-locked.svg');
        break;

        case('guard'):
            $svg = asset('images/email/icons/email-guard.svg');
        break;

        case ('warning'):
            $svg = asset('images/email/icons/email-warning.svg');
        break;

        case ('lock-success'): default:
            $svg = asset('images/email/icons/email-lock-success.svg');
        break;
    }
@endphp

<tr bgcolor="#FFFFFF">
    <td style="text-align: center">
        <img
            src="{{ $svg }}"
            alt="Solidarity svg icon"
        >
    </td>
</tr>
