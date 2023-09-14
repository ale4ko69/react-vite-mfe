// import { Button } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import './button.css';

export const setButton = (props) => {
  const _wrapClassName = props.wrapClassName ?? 'flex items-center justify-center content-around my-4';
  return (
    <div className={_wrapClassName}>
      <Button {...props} />
    </div>
  );
};

export default setButton;
