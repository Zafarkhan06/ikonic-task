<?php

namespace App\Filament\Imports;

use App\Models\User;
use Filament\Actions\Imports\ImportColumn;
use Filament\Actions\Imports\Importer;
use Filament\Actions\Imports\Models\Import;
use Illuminate\Support\Facades\Hash;

class UserImporter extends Importer
{
    protected static ?string $model = User::class;

    public static function getColumns(): array
    {
        return [
            ImportColumn::make('name')
                ->requiredMapping()
                ->rules(['required', 'max:255']),
            ImportColumn::make('email')
                ->requiredMapping()
                ->rules(['required', 'email', 'max:255']),
            ImportColumn::make('email_verified_at')
                ->rules(['email', 'datetime']),
            ImportColumn::make('password')
                ->requiredMapping()
                ->rules(['required', 'max:255']),
            ImportColumn::make('company_name')
                ->rules(['required', 'max:255']),
            ImportColumn::make('role')
                ->rules(['nullable', 'in:Admin,User']),
        ];
    }

    public function resolveRecord(): ?User
    {
         $user = User::firstOrNew([
             ...$this->data,
             'password' => Hash::make($this->data['password'])
         ]);

         if (array_key_exists('role', $this->data)) {
             $user->assignRole($this->data['role']);
         } else {
             $user->assignRole('User');
         }

         return $user;
    }

    public static function getCompletedNotificationBody(Import $import): string
    {
        $body = 'Your user import has completed and ' . number_format($import->successful_rows) . ' ' . str('row')->plural($import->successful_rows) . ' imported.';

        if ($failedRowsCount = $import->getFailedRowsCount()) {
            $body .= ' ' . number_format($failedRowsCount) . ' ' . str('row')->plural($failedRowsCount) . ' failed to import.';
        }

        return $body;
    }
}
