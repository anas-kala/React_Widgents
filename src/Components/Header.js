import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link href={'/'} name={'Accordion'} />

            <Link href='/list' name={'Search'} />

            <Link href='/dropdown' name={'Dropdown'} />

            <Link href='/translate' name={'Translate'} />

        </div>
    );
}

export default Header;