export type responceType = {
  Result: orderType[]
}

export type orderType = {
  AssignedToId?: string,
  CommentsCount: number,
  ContractorOrders?: any,
  CustomId: string,
  DateCreated: string,
  DateModified: string,
  DatePaid?: string,
  DateReady?: string,
  DeliveryAddress: deliveryAddress,
  DeliveryPrice: number,
  DiscountPrice: number,
  DiscountTitle: string,
  DownloadLink: string,
  GoogleClientId: string,
  Id: string,
  LastDownloadedPaymentDocument?: "string",
  ManagerId?: string,
  PaidPrice: number,
  PaymentStatus: string,
  PaymentSystemUniqueId?: string,
  PhotolabId: number,
  PreviewImageUrl: string,
  Price: number,
  RenderStatus: string,
  Shipping: shipping,
  SourceOrderId?: string,
  Status: string,
  Title: string,
  TotalPrice: number,
  TrackingNumber?: number,
  TrackingUrl: string,
  UserCompanyAccountId?: string,
  UserId: number
}

export type deliveryAddress = {
  AddressLine1: string,
  AddressLine2: string,
  City: string,
  Country: string,
  Description: string,
  FullName: string,
  Phone: string,
  State: string,
  ZipCode: string
}

export type shipping = {
  Email?: string,
  Id: number,
  Phone: string,
  Title: string,
  Type: string,
}