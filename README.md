# ID-cpf---validator
Citizen Registration Validator (for register Brazilian system)


CPF is a register citizen number in Brazil and is necessary 
some math rules to the CPF number be considered valid.

    Rules:
          1. The CPF number must have 11 digits.
          2. There's a specific calc math to validate the last two digits
          3. A CPF number with all digits equal is considered a "famous invalid CPF number"
             (e.g  11111111111,  22222222222, etc.).

Here are some  VALID fake CPF numbers to you try in this system:
    
      05732715002    or       35922989090      or      81696009014

All these numbers above were obtained in the platform that creates valid fake CPF
numbers for testing:
https://www.4devs.com.br/gerador_de_cpf (utilized the version of cpf numbers without punctuation).
