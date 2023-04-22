import { Button, Checkbox, Divider, Tabs } from 'antd';
import { getTimeProps } from 'antd/es/date-picker/generatePicker';
import { useMemo, useState } from 'react';

import  {DestinationForm}  from '../../../../components/new destination/new_destination_form/new_destination_modal_form';

const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  right: <DestinationForm/>,
};

const items = [
                {id: 1, name: 'Active Trips'},
                {id: 2, name:'Archived Trips'},
                {id: 3, name: 'Recurring Trips'}
            ]
const TabTitle = items.map(item => {
    return{
        label: item.name,
        key: item.id,
        children: `List of ${item.name}`,
    };
});


const TabComponent = () => {
  const [position, setPosition] = useState(['right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);
  return (
    <>
      <Tabs tabBarExtraContent={slot} items={TabTitle} />
    </>
  );
};
export default TabComponent;