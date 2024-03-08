import { ScreenWidth } from 'app/shared/utils/crud-item-options/screen-width.model';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';
import { TypeInput } from 'app/shared/utils/crud-item-options/type.model';


export const PRODUCT_TABLE_CONF: CrudItemOptions[] = [
  {
    key: 'id',
    controlType: ControlType.INPUT,
    type: TypeInput.TEXT,
    label: 'ID',
    columnOptions: {
      minScreenSize: ScreenWidth.large,
      hidden: true
    },
    controlOptions: {      
      hideOnCreate: false,
      hideOnUpdate: false,
      disableOnCreate: true,
      disableOnUpdate: true
    }
  },
  {
    key: 'code',
    controlType: ControlType.INPUT,
    type: TypeInput.TEXT,
    label: 'code',
    columnOptions: {
      minScreenSize: ScreenWidth.small,
      default: true
    },
  },
  {
    key: 'name',
    controlType: ControlType.INPUT,
    type: TypeInput.TEXT,
    label: 'name',
    columnOptions: {
      minScreenSize: ScreenWidth.small,
      default: true
    },
  },
  {
    key: 'description',
    controlType: ControlType.INPUT,
    type: TypeInput.TEXT,
    label: 'description',
    columnOptions: {
      minScreenSize: ScreenWidth.large,
    },
  },
  {
    key: 'category',
    controlType: ControlType.SELECT,
    label: 'category',
    options: [{value: "Accessories",label: "Accessories" },
    {value: "Clothing",label: "Clothing" },
    {value: "Electronics",label: "Electronics" },
    {value: "Fitness",label: "Fitness" }],

    columnOptions: {
      minScreenSize: ScreenWidth.small,
    }
  },
  {
    key: 'inventoryStatus',
    controlType: ControlType.SELECT,
    label: 'inventoryStatus',
    options: [{value: "INSTOCK",label: "INSTOCK" },
    {value:"LOWSTOCK",label: "LOWSTOCK" }, 
    {value: "OUTOFSTOCK",label: "OUTOFSTOCK"}],
    columnOptions: {
      minScreenSize: ScreenWidth.small,
    }
  },
  {
    key: 'price',
    controlType: ControlType.INPUT,
    type: TypeInput.NUMBER,
    label: 'price',
    columnOptions: {
      minScreenSize: ScreenWidth.small,
    },
  },
  {
    key: 'quantity',
    controlType: ControlType.INPUT,
    type: TypeInput.NUMBER,
    label: 'Quantity',
    columnOptions: {
      minScreenSize: ScreenWidth.small,
    },
    controlOptions: {
    }
  }

]; 