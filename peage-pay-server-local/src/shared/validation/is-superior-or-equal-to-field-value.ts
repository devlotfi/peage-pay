import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsSuperiorOrEqualToFieldValue', async: false })
export class IsSuperiorOrEqualToFieldValueConstraint
  implements ValidatorConstraintInterface
{
  validate(value: number, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];

    if (typeof relatedValue !== 'number') {
      throw new Error(`${relatedPropertyName} is not a number`);
    }

    return value >= relatedValue;
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${args.property} must be superior to ${relatedPropertyName}`;
  }
}

export function IsSuperiorOrEqualToFieldValue(
  relatedPropertyName: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [relatedPropertyName],
      validator: IsSuperiorOrEqualToFieldValueConstraint,
    });
  };
}
