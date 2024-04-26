<?php

namespace App\Repositories\OnboardingAnswers;

use App\Models\OnboardingAnswer;
use App\Repositories\Base\BaseRepository;
use App\Repositories\OnboardingAnswers\Interfaces\OnboardingAnswersRepositoryInterface;

class OnboardingAnswersRepository extends BaseRepository implements OnboardingAnswersRepositoryInterface
{
    /**
     * @param OnboardingAnswer $onboardingAnswer
     */
    public function __construct(OnboardingAnswer $onboardingAnswer)
    {
        parent::__construct($onboardingAnswer);
    }
}
