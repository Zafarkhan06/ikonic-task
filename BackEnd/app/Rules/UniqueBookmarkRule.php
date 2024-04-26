<?php

namespace App\Rules;

use App\Models\Asset;
use App\Models\Bookmark;
use App\Models\Folder;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;

class UniqueBookmarkRule implements ValidationRule
{

    protected $folder_id;

    /**
     * @param $folder_id
     */
    public function __construct($folder_id)
    {
        $this->folder_id = $folder_id;
    }

    /**
     * @param $attribute
     * @param $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        $user_id = auth()->user()->id ?? null;
        $app_asset_id = $value;
        $asset = Asset::where('app_asset_id', $app_asset_id)->first();
        $assetId = $asset ? $asset->id : null;

        $globalUnique = true;

        if (!$this->folder_id) {
            // Check if a bookmark already exists for the given user and asset_id globally
            $globalUnique = !Bookmark::where('user_id', $user_id)->whereDoesntHave('folders')
                ->where('asset_id', $assetId)
                ->exists();
        }

        if ($this->folder_id && $user_id) {
            // Check if the combination is unique within the specified folder
            $folderUnique = !Folder::find($this->folder_id)
                ->bookmarks()
                ->where('asset_id', $assetId)
                ->where('user_id', $user_id)
                ->exists();
        } else {
            $folderUnique = true; // No folder specified, so no need to check folder uniqueness
        }

        return $globalUnique && $folderUnique;
    }

    /**
     * @return string
     */
    public function message(): string
    {
        return 'The bookmark already exists.';
    }


    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!$this->passes($attribute, $value)) {
            $fail($this->message());
        }
    }
}
