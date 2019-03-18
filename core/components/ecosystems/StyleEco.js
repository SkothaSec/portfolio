import React from 'react';
import { ButtonAtom, TextButtonAtom } from '@atoms/buttons';
import { CardAtom } from '@atoms/cards';
import { ProgressAtom } from '@atoms/feedback';
import { CheckboxAtom, InputAreaAtom, InputFieldAtom, RadioAtom, SelectAtom } from '@atoms/forms';
import { FontsAtom } from '@atoms/global';
import {
    AvatarAtom,
    HeroAtom,
    LandscapeAtom,
    LogoAtom,
    NavLogoAtom,
    SquareImageAtom,
} from '@atoms/images';
import {
    HeadingAtom,
    HorizontalAtom,
    InlineAtom,
    ParagraphAtom,
    PreformattedAtom,
} from '@atoms/text';

const StyleEco = () => {
    return (
        <div className="App">
            <h1>Test Atoms</h1>
            <br />
            <h2>Buttons (atoms/buttons)</h2>
            <ButtonAtom />
            <TextButtonAtom />
            <h2>Cards</h2>
            <CardAtom />
            <h2>Feedback</h2>
            <ProgressAtom />
            <h2>Forms</h2>
            <CheckboxAtom />
            <InputAreaAtom />
            <InputFieldAtom />
            <RadioAtom />
            <SelectAtom />
            <h2>Global</h2>
            <FontsAtom />
            <h2>Images</h2>
            <AvatarAtom />
            <HeroAtom />
            <LandscapeAtom />
            <LogoAtom />
            <NavLogoAtom />
            <SquareImageAtom />
            <h2>Text</h2>
            <HeadingAtom />
            <HorizontalAtom />
            <InlineAtom />
            <ParagraphAtom />
            <PreformattedAtom />
        </div>
    );
};

export default StyleEco;
