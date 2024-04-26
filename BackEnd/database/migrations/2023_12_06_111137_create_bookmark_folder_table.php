<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookmark_folder', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bookmark_id');
            $table->unsignedBigInteger('folder_id');
            $table->timestamps();

            $table->unique(['folder_id', 'bookmark_id']);

            $table->foreign('folder_id')->references('id')->on('folders')->onDelete('cascade');
            $table->foreign('bookmark_id')->references('id')->on('bookmarks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookmark_folder');
    }
};
