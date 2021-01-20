// @ts-ignore
type TStoreContent = {
  data: Transaction[];
};

type TStoreContext = {
  store: TStoreContent;
  setStore(store: TStoreContent): void;
};

type Currency = "AUD" | "USD" | "INR";

type Transaction = {
  currency: Currency;
  amount: number;
  type: string;
  id: string;
};

type GroupByCurrency = [
  {
    balance: number;
    currency: Currency;
    transaction: Transaction[];
  }
];

type FormProp = {
  id?: string;
  toggle?: () => void;
  store: TStoreContent;
  setStore: (store: TStoreContent) => void;
};

type ButtonColor = "primary" | "secondary" | "success" | "danger";

type BtnProp = {
  btnLabel: string;
  btnColor: ButtonColor;
  onBtnClick: () => void;
};

type ModalProps = {
  buttonLabel: string;
  buttonColor: ButtonColor;
  id?: string;
};

type HeadingProp = {
  heading: string;
};

type TransactionListProp = {
  transactions: Transaction[];
  store?: TStoreContent;
  setStore?: (store: TStoreContent) => void;
};

type CheckboxProp = {
  isGroupBy: boolean;
  setIsGroupBy: React.Dispatch<React.SetStateAction<boolean>>;
};
