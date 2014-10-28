<?php

/* Validate alphanumerics and spaces*/

Validator::extend('alphanumeric_spaces', function($attribute, $value)
{
    return preg_match('/^([-a-z0-9_\s])+$/i', $value);
});

