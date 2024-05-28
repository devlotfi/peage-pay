import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsSuperiorToFieldValue', async: false })
export class IsSuperiorToFieldValueConstraint
  implements ValidatorConstraintInterface
{
  validate(value: number, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];

    if (typeof relatedValue !== 'number') {
      throw new Error(`${relatedPropertyName} is not a number`);
    }

    return value > relatedValue;
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${args.property} must be superior to ${relatedPropertyName}`;
  }
}

export function IsSuperiorToFieldValue(
  relatedPropertyName: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [relatedPropertyName],
      validator: IsSuperiorToFieldValueConstraint,
    });
  };
}
