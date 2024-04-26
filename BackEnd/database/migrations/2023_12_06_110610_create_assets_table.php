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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->string('app_asset_id')->unique();
            $table->string('type')->nullable();
            $table->string('title');
            $table->string('layers')->nullable();
            $table->string('frames')->nullable();
            $table->string('thumbnail')->nullable();
            $table->boolean('has_video')->default(false);
            $table->string('video')->nullable();
            $table->boolean('has_tutorial_video')->default(false);
            $table->string('tutorial_video')->nullable();
            $table->string('icon')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
