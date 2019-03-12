export interface Email{
  id: number,
  from: String,
  to: String,
  subject: String,
  text: String,
  read: boolean,
  received: String
}