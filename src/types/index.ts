type PropType = {
  value?: any;
  onChange?: (e: any) => void;
  validator?: (e: any) => void;
  inputProcessor?: (e: any) => void;
  outputProcessor?: (e: any) => void;
  innerRef?: any;
};

export default PropType;
