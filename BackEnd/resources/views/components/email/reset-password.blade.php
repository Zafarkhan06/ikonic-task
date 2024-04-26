<div>
    <x-text.helper-body-text>
        {{ trans('snp-portal.change_password_prompt') }}
    </x-text.helper-body-text>

    <x-email.link
        :url="url(route('update-password.view'))"
        :text="trans('snp-portal.change_password')"
    />
</div>
