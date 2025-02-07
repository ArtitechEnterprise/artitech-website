/* eslint-disable @next/next/no-img-element */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SwitchLanguage = () => {
  return (
    <Select>
      <SelectTrigger className=' w-[100px] focus:ring-0 focus-visible:ring-0 ring-0 '>
        <SelectValue defaultValue={'fr'} placeholder='Changer la langue' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='en-US'>
            <div className='flex items-center gap-2'>
              <img
                src='/united-states.png'
                alt='united
    
            states'
                title='united states'
                loading='lazy'
                className='w-7'
              />
              <span>En</span>
            </div>
          </SelectItem>
          <SelectItem value='fr'>
            <div className='flex items-center gap-2'>
              <img
                className='w-7'
                src='/france.png'
                alt='france'
                title='france'
                loading='lazy'
              />
              <span>Fr</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SwitchLanguage;
