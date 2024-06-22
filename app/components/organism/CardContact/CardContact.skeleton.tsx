import { Column } from "app/components/atoms"
import { border, spacing } from "app/theme"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

export function CardContactSkeleton() {
  return (
    <Column padding={{ h: spacing.large, v: spacing.small }}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item width={46} height={46} borderRadius={border.full} />
            <SkeletonPlaceholder.Item marginLeft={spacing.small}>
              <SkeletonPlaceholder.Item width={120} height={17} borderRadius={border.micro} />
              <SkeletonPlaceholder.Item
                width={80}
                height={12}
                borderRadius={border.micro}
                marginTop={spacing.tiny}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Column>
  )
}
