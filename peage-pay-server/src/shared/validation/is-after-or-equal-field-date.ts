import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsAfterOrEqualFieldDate', async: false })
export class IsAfterOrEqualFieldDateConstraint
  implements ValidatorConstraintInterface
{
  validate(value: Date, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];

    if (!(relatedValue instanceof Date)) {
      throw new Error(`${relatedPropertyName} is not a Date object`);
    }

    return value.getTime() >= relatedValue.getTime();
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${args.property} must be after ${relatedPropertyName}`;
  }
}

export function IsAfterOrEqualFieldDate(
  relatedPropertyName: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [relatedPropertyName],
      validator: IsAfterOrEqualFieldDateConstraint,
    });
  };
}
