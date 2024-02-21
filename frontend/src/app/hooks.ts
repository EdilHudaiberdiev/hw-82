import {AppDispatch, RootState} from './store';
import {useNavigate} from 'react-router-dom';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const navigate = useNavigate();