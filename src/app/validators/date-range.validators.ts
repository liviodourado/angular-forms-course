import { FormGroup, ValidatorFn, Validators } from "@angular/forms";

export function CreatePromoRangeValidator(): ValidatorFn {
  return (form: FormGroup): Validators | null => {
    const start: Date = form.get("promoStartAt").value;
    const end: Date = form.get("promoEndAt").value;
    if (start && end) {
      const isRangeValid = end.getTime() - start.getTime() > 0;
      return isRangeValid ? null : { promoPeriod: true };
    }
    return null;
  };
}
