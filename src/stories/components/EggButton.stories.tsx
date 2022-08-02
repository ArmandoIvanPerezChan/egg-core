import { EggButton } from "../../components/EggButton/EggButton";


export default  {
    title: 'UI/Button',
    component: EggButton,
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        full: { control: 'boolean' }
    }
}

const TemplateEggButton = (args: any) => <EggButton {...args} >Test</EggButton>

const TemplateEggButtonIcon = (args: any) => <EggButton {...args} >
    <span>span here</span>
</EggButton>

export const Basic = TemplateEggButton.bind({})

export const AllCaps = TemplateEggButtonIcon.bind({})