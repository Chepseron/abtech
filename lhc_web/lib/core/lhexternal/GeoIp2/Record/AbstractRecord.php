<?php

namespace GeoIp2\Record;

abstract class AbstractRecord implements \JsonSerializable
{
    private $record;

    /**
     * @ignore
     */
    public function __construct($record)
    {
        $this->record = $record;
    }

    /**
     * @ignore
     */
    public function __get($attr)
    {
        // XXX - kind of ugly but greatly reduces boilerplate code
        $key = $this->attributeToKey($attr);

        if ($this->__isset($attr)) {
            return $this->record[$key];
        } elseif ($this->validAttribute($attr)) {
            return null;
        } else {
            throw new \RuntimeException("Unknown attribute: $attr");
        }
    }

    public function __isset($attr)
    {
        return $this->validAttribute($attr) &&
             isset($this->record[$this->attributeToKey($attr)]);
    }

    private function attributeToKey($attr)
    {
        return strtolower(preg_replace('/([A-Z])/', '_\1', $attr));
    }

    private function validAttribute($attr)
    {
        return in_array($attr, $this->validAttributes);
    }

    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return $this->record;
    }
}
