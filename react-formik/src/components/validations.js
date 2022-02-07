import { ref } from 'yup';
import { object, string, number, date, InferType } from 'yup';

const validations = object({
    email: string().email("Geçerli bir e-mail girin.").required("Zorunlu alan."),
    password:string().min(5,"Parolanız en az 5 karakter olmalıdır.").required("Zorunlu alan."),
    passwordConfirm: string().oneOf([ref('password')], "Parolalar oluşmuyor.").required("Zorunlu alan."),
  });

export default validations;