export interface ButtonProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius?: string;
  width: string;
  textAlign?: string;
  backgroundColor: string
}

export interface DivElement extends HTMLDivElement{
  itemId?: string;
  itemValue?: string;
  border?: string;
  color?: string;
  height?: string;
  width?: string;
  backgroundColor: string;
}

