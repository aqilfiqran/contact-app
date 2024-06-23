import { useRoute } from "@react-navigation/native"
import { Column, Spacer } from "app/components/atoms"
import { Avatar } from "app/components/molecules"
import { LabelInformation } from "app/components/organism"
import { AppRouteProp } from "app/navigators"
import { useContactDetail } from "app/services/api/contact"
import { size, spacing } from "app/theme"
import { useTheme } from "app/theme/hooks"
import { memo } from "react"
import { ActivityIndicator } from "react-native"

export const Information = memo(() => {
  const { colors } = useTheme()
  const route = useRoute<AppRouteProp<"ContactDetail">>()
  const { id } = route.params

  const { data, isLoading } = useContactDetail({ params: { id } })

  if (isLoading)
    return (
      <Column
        padding={{ h: spacing.large, v: spacing.medium }}
        alignment="center"
        arrangement="center"
        minHeight={size.height}
      >
        <ActivityIndicator size="large" color={colors.palette.primary.main} />
      </Column>
    )

  const initialName = `${data?.firstName[0]}${data?.lastName[0]}`
  const age = `${data?.age} tahun`
  const isHavePhoto = data?.photo !== null && data?.photo !== "N/A"

  return (
    <Column padding={{ h: spacing.large, v: spacing.medium }}>
      <Column alignment="center" arrangement="center" contentStyle="fitContent">
        <Avatar size="xlarge" source={isHavePhoto && { uri: data?.photo }} text={initialName} />
      </Column>
      <Column padding={{ t: spacing.large }}>
        <LabelInformation label="Nama Depan" value={data?.firstName} />
        <Spacer length={spacing.small} />
        <LabelInformation label="Nama Belakang" value={data?.lastName} />
        <Spacer length={spacing.small} />
        <LabelInformation label="Umur" value={age} />
      </Column>
    </Column>
  )
})
