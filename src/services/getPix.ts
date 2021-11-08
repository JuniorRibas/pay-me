import { QrCodePix } from "qrcode-pix";

interface IParameter {
  version: string;
  key: string;
  city: string;
  name: string;
  value?: number;
  transactionId?: string;
  message?: string;
  cep?: string;
  notRepeatPayment?: boolean; //default: false
  currency?: number; //default: 986 ('R$')
  countryCode?: string; //default: 'BR'
}

export class PIX {
  public async execute({
    city,
    key,
    name,
    version,
    cep,
    countryCode,
    currency,
    message,
    notRepeatPayment,
    transactionId,
    value,
  }: IParameter) {
    const qrCodePix = await QrCodePix({
      city,
      key,
      name,
      version,
      cep,
      countryCode,
      currency,
      message,
      notRepeatPayment,
      transactionId,
      value,
    });

    if (!qrCodePix) {
      throw "ERR_PIX_RESPONSE";
    }

    return qrCodePix;
  }
}
