import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Avatar, Typographgy } from 'components/atoms'
import { NavigationHeader, ProfileSettingsCard } from 'components/molecules'
import {
  SettingAboutSection,
  SettingsAccountSection,
} from 'components/organisms'

export const Settings: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { user } = useAuth()
  const { t: translation } = useTranslation()

  const settingTitle = translation('Settings.settingTitle')
  const AboutUsSectionTitle = translation('Settings.AboutUsSectionTitle')
  const AccountSectionTitle = translation('Settings.AccountSectionTitle')
  return (
    <SafeAreaView>
      <NavigationHeader IconType='back' />
      <View style={style.content}>
        <View style={style.sectionContainer}>
          <Typographgy style={style.title} variant='h1'>
            {settingTitle}
          </Typographgy>
          <ProfileSettingsCard
            icon={<Avatar style={style.avatar} />}
            title={user?.email}
          />
        </View>
        <View style={style.sectionContainer}>
          <Typographgy style={style.sectionTitle} variant='h3'>
            {AboutUsSectionTitle}
          </Typographgy>
          <SettingAboutSection />
        </View>
        <View style={style.sectionContainer}>
          <Typographgy style={style.sectionTitle} variant='h3'>
            {AccountSectionTitle}
          </Typographgy>
          <SettingsAccountSection />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    content: {
      padding: 16,
    },
    title: {
      marginBottom: 16,
    },
    avatar: {
      height: 48,
      width: 48,
    },
    sectionTitle: {
      color: theme.colors.textSecondary,
      marginBottom: 8,
    },
    sectionContainer: {
      marginVertical: 16,
    },
  })
}
