<?php
namespace Stwz\Form\MultiColumnSection\Form;

use Neos\Form\Core\Model\FormElementInterface;
use Neos\Form\FormElements\Section;

class ThreeColumnFormElement extends Section
{
    /**
     * @var FormElementInterface[]
     */
    private $column1Elements = [];

    /**
     * @var FormElementInterface[]
     */
    private $column2Elements = [];

    /**
     * @var FormElementInterface[]
     */
    private $column3Elements = [];

    public function onBuildingFinished() {
        /** @var FormElementInterface $renderable */
        foreach ($this->renderables as $renderable) {
            $renderingOptions = $renderable->getRenderingOptions();
            if (isset($renderingOptions['_column']) && $renderingOptions['_column'] === 2) {
                $this->column2Elements[] = $renderable;
            } else {
                if (isset($renderingOptions['_column']) && $renderingOptions['_column'] === 3) {
                    $this->column3Elements[] = $renderable;
                } else {
                    $this->column1Elements[] = $renderable;
                }
            }
        }
    }

    /**
     * @return FormElementInterface[]
     */
    public function getColumn1Elements(): array {
        return $this->column1Elements;
    }

    /**
     * @return FormElementInterface[]
     */
    public function getColumn2Elements(): array {
        return $this->column2Elements;
    }

    /**
     * @return FormElementInterface[]
     */
    public function getColumn3Elements(): array {
        return $this->column3Elements;
    }

}