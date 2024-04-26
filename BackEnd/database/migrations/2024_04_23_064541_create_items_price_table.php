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
        Schema::create('item_prices', function (Blueprint $table) {
            $table->id();
            $table->integer('price')->nullable();
            $table->unsignedBigInteger('services_type_id');
            $table->unsignedBigInteger('sub_services_type_id');
            $table->unsignedBigInteger('sub_services_type_item_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('services_type_id')->references('id')->on('services_types')->onDelete('cascade');
            $table->foreign('sub_services_type_id')->references('id')->on('sub_services_types')->onDelete('cascade');
            $table->foreign('sub_services_type_item_id')->references('id')->on('sub_services_type_items')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items_price');
    }
};
