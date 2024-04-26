<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $roles = $this->record->getRoleNames();

        if (count($roles)) {
            $data['role'] = $roles[0];
        }

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        if (is_null($data['password'])) {
            unset($data['password']);
        }

        return $data;
    }

    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        $record->update($data);
        $record->syncRoles($data['role']);

        return $record;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
