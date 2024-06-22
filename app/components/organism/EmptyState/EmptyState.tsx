import { Button, Column, Icon, Text, createButtonProps } from "app/components/atoms"
import { EmptyStateProps } from "./EmptyState.types"
import { useTheme } from "app/theme/hooks"
import { spacing } from "app/theme"
import { memo } from "react"

export function EmptyState(props: EmptyStateProps) {
  const { colors } = useTheme()
  const { title, description, button, containerProps } = props

  const buttonProps = createButtonProps(button)
  return (
    <Column
      alignment="center"
      arrangement="center"
      contentStyle="fillContainer"
      {...containerProps}
    >
      <Icon name='file-remove-inlc' size={64} color={colors.palette.neutral.main} />

      <Text text={title} preset="Text lg" weight="medium" />
      {!!description && (
        <Text
          padding={{ t: spacing.tiny }}
          text={description}
          preset="Text sm"
          weight="normal"
          color={colors.palette.neutral.main}
        />
      )}

      {!!button && <Button {...buttonProps} style={{ marginTop: spacing.large }} />}
    </Column>
  )
}

export const MemoizedEmptyState = memo(EmptyState, () => true)
