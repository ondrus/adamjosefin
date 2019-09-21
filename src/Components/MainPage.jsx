import React from 'react';
import './MainPage.css'

export function MainPage(props) {
    return (
    <div className={'mpContainer'}>
        <div className={'topContainer'}>
            <div className={'topContent'}>
            </div>    
            <img className={'backdrop'} src={'./backdrop.svg'} alt={'line'} />
        
        </div>    
        <div className={'btmContainer'}>
            <div className={'names'}>
                <span className={'adam'}>{'Adam Scott'}</span>
                <span className={'annd'}>{'&'}</span>
                <span className={'jossie'}>{'Josefin Ondrus'}</span>
            </div>    
            <div className={'ph2'}>
            </div>    
        </div>    
    </div>);
}