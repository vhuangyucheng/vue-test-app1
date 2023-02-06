import {useToggle} from '@vant/use';


const [state, toggle] = useToggle(true);
export default [state, toggle];