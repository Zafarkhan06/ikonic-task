<?php

namespace App\Http\Requests;

use App\Rules\UniqueBookmarkRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreBookmarkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
           'category_id' => 'required',
           'title' => 'required',
           'app_asset_id' => ['required', new UniqueBookmarkRule( $this->input('folder_id') )]
        ];
    }
}
