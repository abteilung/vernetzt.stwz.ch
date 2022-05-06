<?php
namespace Stwz\Form\MultiColumnSection\Fusion;

use Neos\Form\Builder\Fusion\SectionImplementation;

class ThreeColumnFormElementImplementation extends SectionImplementation
{
    protected function evaluateChildElements() {
        $this->runtime->evaluate($this->path . '/column1Elements');
        $this->runtime->evaluate($this->path . '/column2Elements');
        $this->runtime->evaluate($this->path . '/column3Elements');
    }
}