import { useNavigation } from "@react-navigation/native"
import { MemoizedDivider } from "app/components/atoms"
import { CardContact, CardContactSkeleton, EmptyState } from "app/components/organism"
import { AppNavScreen } from "app/navigators"
import { useContactList } from "app/services/api/contact"
import { size } from "app/theme"
import { useTheme } from "app/theme/hooks"
import { memo, useCallback, useMemo } from "react"
import { FlatList } from "react-native"

export const List = memo(() => {
  const { colors } = useTheme()
  const navigation = useNavigation<AppNavScreen>()

  const { data = [], isLoading, error, refetch } = useContactList()

  const renderData = useMemo(() => {
    if (isLoading) return Array.from({ length: 5 }).map((_, index) => ({ id: index.toString() }))
    return data
  }, [data, isLoading])

  const ListEmptyComponent = useCallback(() => {
    const title = error ? "Gagal memuat data" : "Tidak ada data"
    const description = error ? "Terjadi kesalahan saat memuat data" : "Data tidak ditemukan"

    return (
      <EmptyState
        title={title}
        description={description}
        containerProps={{
          height: size.height * 0.5,
        }}
        button={
          error && {
            text: "Coba lagi",
            onPress: () => {
              refetch()
            },
          }
        }
      />
    )
  }, [refetch, error])

  const ItemSeparatorComponent = useCallback(() => {
    return <MemoizedDivider height={1} color={colors.palette.neutral.light} />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderItem = useCallback(
    ({ item }) => {
      if (isLoading) return <CardContactSkeleton />
      return (
        <CardContact
          data={item}
          onPress={() => navigation.navigate("ContactDetail", { id: item.id })}
        />
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading],
  )

  return (
    <FlatList
      data={renderData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      scrollEnabled={false}
    />
  )
})
