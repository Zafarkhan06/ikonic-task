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
        Schema::create('asset_program_chapters', function (Blueprint $table) {
            $table->id();
            $table->string('chapter_id');
            $table->string('title')->nullable();
            $table->string('duration')->nullable();
            $table->string('video')->nullable();
            $table->timestamps();

            $table->foreignId('asset_id')
                ->constrained()
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_program_chapters');
    }
};
