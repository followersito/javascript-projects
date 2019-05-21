SELECT(bcm.sala[sala_id],
    AND([fk_sitio_id]=[Sitio],
    NOT(IN([sala_id],SELECT(bcm.frm_sala[fk_nmbr_sala_id],
    (IN(USEREMAIL(),SELECT(bcm.frm_inspeccion[revisor],[id_inspeccion]=[fk_frm_inspeccion_id])))
                            )
            )
        )
        )
        )

SELECT(sup.cabecera[fecha_hora_registro],)

MAXROW(sup.cabecera, fecha_hora_registro, ([sitio_id]=[_THISROW].[sitio_id]))